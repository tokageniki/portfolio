import speech_recognition as sr
import json
import requests
import simpleaudio
import requests
 
 
# 音声入力
while True:
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("入力待ち。")
        audio = r.listen(source)
 
    try:
        # Google Web Speech APIで音声認識
        text = r.recognize_google(audio, language="ja-JP")
    except sr.UnknownValueError:
        print("音声を認識できませんでした。")
    except sr.RequestError as e:
        print("音声認識を要求できませんでした;"
              " {0}".format(e))
    else:  
        def talk_api(text):
            apikey = "ZZeKzClYT6DKuwXIxt6thd4m6jFmj126"  #@param {type:"string",title:"キー入力"}
            talk_url = "https://api.a3rt.recruit.co.jp/talk/v1/smalltalk"
            payload = {"apikey": apikey, "query": text}
            response = requests.post(talk_url, data=payload)
            try:
                return response.json()["results"][0]["reply"]
            except:
                print(response.json())
                return "ごめんなさい。もう一度教えて下さい。"
        answer = talk_api(text)
        print("自分：", text)
        print("BOT：" + answer)  
    if text == "終了":
        break



    def text_2_wav(text, speaker_id=8, max_retry=20, filename='audio.wav'):
        # 音声合成のための、クエリを作成
        query_payload = {"text": text, "speaker": speaker_id}
        for query_i in range(max_retry):
            response = requests.post("http://localhost:50021/audio_query",
                                    params=query_payload,
                                    timeout=10)
            if response.status_code == 200:
                query_data = response.json()
                break
        else:
            raise ConnectionError('リトライ回数が上限に到達しました。')

        # 音声合成データの作成して、wavファイルに保存
        synth_payload = {"speaker": speaker_id}
        for synth_i in range(max_retry):
            response = requests.post("http://localhost:50021/synthesis",
                                    params=synth_payload,
                                    data=json.dumps(query_data),
                                    timeout=10)
            if response.status_code == 200:
                with open(filename, "wb") as fp:
                    fp.write(response.content)
                break
        else:
            raise ConnectionError('リトライ回数が上限に到達しました。')


    def play_auido_by_filename(filename: str):
        # 保存したwavファイルを、再生
        wav_obj = simpleaudio.WaveObject.from_wave_file(filename)
        play_obj = wav_obj.play()
        play_obj.wait_done()


    if __name__ == '__main__':
        filename = 'audio.wav'  # 音声データのファイル名
        text_2_wav(answer, filename=filename)
        play_auido_by_filename(filename)