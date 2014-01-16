var Recorder  = require('recorder'),
    editor    = document.querySelector('.editor'),
    player    = document.querySelector('.player'),
    recorder  = new Recorder(editor);

document.querySelector('button.replay').addEventListener('click', function () {
  recorder.play(player);
});

document.querySelector('button.clear').addEventListener('click',function () {
  recorder.clear();
  editor.value = '';
  player.value = '';
});

document.querySelector('button.print').addEventListener('click', function () {
  console.log(recorder.getRecording());
});