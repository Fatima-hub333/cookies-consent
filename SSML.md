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

Reserve Characters:- Avoid using SSML reserve characters in the text that is to be converted to audio. When you need to use an SSML reserve character, prevent the charracter from being read as code by using its escape code. 
"
&
'
<
>

<break /> (3s, 250mx, x-weak, weak, medium, strong, x-strong)
<speak>
Step 1, take a deep breath. <break time="200ms" />
Step 2, exhale.
Step 3, take a deep breath again. <break strength="weak" />
Step 4, exhale.
</speak>

<say-as></say-as> (This element let you indicate information about the type of the text construct that is contained witin the element. It also hel specifiy the level of detail for rendering the contained text. This element has the required attribute 'interpret-as' which determines how the value is spoken. Otional attributes 'format' and 'detail' is used.

- Interpret-as;- attribute suports the following values:
a) currency
<speak>
  <say-as interpret-as='currency' language='en-US'> $42.01 </say-as>
</speak>

b) telephone
<speak>
  <say-as interpret-as='telephone' google:style='zero-as-zero'>1800-202-1212</say-as>
</speak>

c) Verbatim or spell-out
<speak>
  <say-as interpret-as='verbatim'>abcdefg</say-as>
</speak>

d) date
<speak>
  <say-as interpret-as="date" format="yyyymmdd" detail="1">
    1960-09-10
  </say-as>
</speak>

<speak>
  <say-as interpret-as="date" format="dm">10-9</say-as>
</speak>

<speak>
  <say-as interpret-as="date" format="dmy" detail="2">
    10-9-1960
  </say-as>
</speak>

e) characters
<speak>
  <say-as interpret-as="characters">can</say-as>
</speak>

f) cardinal
<speak>
  <say-as interpret-as='cardinal'> 12345 </say-as>
</speak>

g) Ordinal
<speak>
  <say-as interpret-as='ordinal'> 1 </say-as>
</speak>

h) expletive/bleep
i) unit
j) time