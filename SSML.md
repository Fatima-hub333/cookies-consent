You can send SSML in your text-to-speech request to allow for more cutomization in your audio response by providing details on pauses, and audio formatting for acronyms, dates, times, abbrevations or text that should be censored.

<speak>
Here are <say-as interpret-as="characters"> SSML </say-as> samples.
I can pause <break time="3s" />.
I can play a sound <audio src="https://www.example.com/MY_MP3_FILE.mp3"> didn't get your MP3 audio file </audio>.
I can speak in cardinals. Your number is <say-as interpret-as="cardinal">10 </say-as>.

- ADC (Application Default Credentials)

*Types of Client Libraries*
There are two types of client libraries available. 
1) Clound Client Library, and 
2) GOOGle Client Libraries
Both of these types support Application Default Credentials.

*Use ADC with client libraries*
To use ADC to authenticate your application, you must first set up ADC fro the environment where your application is running. When you use the client library to create a client, the client library automatically checks for and uses the credentials you have provided to ADC to authenticate to the API's your code users. Your application does not need to explicitly authenticate or manage tokens; these requirements are managed by automatically by the authentication libraries.

This page describes how to provide credentials to ADC for use by Cloud Client Libraries, Google API libraries and REST and RPC API's in a variety of environments.

ADC is a strategy used by Cloud Client Libraries and Google API Client Libraries to automatically find credentials based on the aplication environemnt, and use those credentials to authenticate to Google cloud API's.

The process of translating text input into audio data is called "synthesis" and the outut of synthesis called synthetic speech. Text-to-seech takes two types of input: a) Raw text  or SSML-formatted data. To create a new audio file, you call the 'synthesis' endpoint of the API.

The speech synthesis process generates raw audio data as a base64-encoded string. You must decode the base64-encoded string into an audio file before an application can lay it.

Text-to-Speech supports configuring the speaking rate, pitch, volume, and sample rate hertz.