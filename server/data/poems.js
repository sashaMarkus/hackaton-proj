function createPoem(personality, inputString, addToDatabase) {
  exportArray = [];
  switch (personality) {
    case 'The Beatles':
      exportArray = [
        'But I never heard it singing',
        "In my life I loved you more And I know I'll never lose affection",
        'Well, you can penetrate any place you go',
        "I'll never do you no harm If I fell in love with you",
        'And tenderly',
        'And she keeps calling',
        "And I will say the only words I know that you'll understand Michelle, ma belle",
        "In the Isle of Wight, if it's not too dear",
        "Goo goo g' joob Sitting in an English garden",
        'And I will sing a lullaby. Once there was a way',
        'And tenderly',
        'And I will sing a lullaby. Golden slumbers,',
        "I don't know how someone controlled you",
        'Yes, I get by with a little help from my friends',
        "I can't hide",
        'And tenderly',
        "I'll never do you no harm Oh! Darling, if you leave me",
        "I don't know why you say Goodbye, I say Hello. You say Yes, I say No.",
        "I don't know how someone controlled you",
        'I want to hold your hand And when I touch you',
      ];
      break;
    case 'Amy Winehouse':
      exportArray = [
        "You might think I've gone too far",
        "Oh, when we are one, I'm not afraid, I'm not afraid",
        "I don't know why I got so attached,",
        'And I go back to',
        "You know that I'm no good Upstairs in bed with my exboy",
        "And I question myself again: what is it 'bout men? Aye aye aye, aye aye aye",
        "I can't help but demostrate my Freudian fate",
        'I know I could',
        'And I do',
        "And I've missed your ginger hair",
        'Will you still love me tomorrow Tonight with words unspoken',
        "It's not enough",
        'But when you need someone to love',
        'I died a hundred times',
        'I know I could',
        "He takes the day, but I'm grown",
        "And I do I don't catch your drift and I don't catch your plan",
        "And I do I don't catch your drift and I don't catch your plan",
        'Is to love love love him',
        'But you end up with onenightsstands. He could be your whole life,',
        'That her man will leave his mark on her hand',
        "And I question myself again: what is it 'bout men? Aye aye aye, aye aye aye",
        "There's no nightlife",
        'I died a hundred times',
        "Why don't you come on over Valerie? Valerie",
        "I can't help but dance",
        'And added to that Im sick of having to seek some peace',
        'I died a hundred times',
        'Will you still love me tomorrow Tonight with words unspoken',
        "So I'm sorry if I upset you Tomorrow is another day",
      ];
      break;
    case 'Adele':
      exportArray = [
        "The words don't come out right when you're right in front of me",
        "When we were young Whenever I'm alone with you",
        'Of your loving arms',
        'They were never true, never true',
        "I've forgiven it all",
        'And you played it to the beat',
        "I'll put my hands up",
        "Look how you want me now that I don't need you. So, you thought that I'd crumble to my knees",
        'They keep me thinking that we almost had it all',
        "When you don't, ooh don't",
        'The scars of your love remind me of us',
        "I know I'd never be me",
        'I miss you when the lights go out',
        "And the games you'd play, you would always win, always win But I set fire to the rain",
        'And face it all together',
        "I'll be waiting for you when you're ready to love me again",
        "I can't drown in your tears",
        'It was just like a song',
        "But you'll never have my heart Let the sky fall",
        'They were never true, never true',
        'I will always love you',
        "I won't face your fears",
        "I can't describe how I feel, it feels right It's above and beyond me",
        'I still care',
        'That I will be, I will be your remedy, oh When the pain cuts you deep',
        "I won't go, I can't do it on my own",
        "I can't describe how I feel, it feels right It's above and beyond me",
        'I want you to love me',
        "But you'll never have my heart Let the sky fall",
        "When I don't get nothing back",
      ];
      break;
    case 'Name':
      exportArray = [];
      break;
    default:
      exportArray = ['Something went wrong...'];
  }
  return exportArray;
}
exports.createPoem = createPoem;
