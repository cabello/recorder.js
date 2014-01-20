recorder.js
===

A textual recorder for textareas and text editors

### Usage

`<script src="dist/recorder.min.js"></script>`

*Note: All recorder types are accessible via `window.Recorder`.*

**Textarea**
```javascript

// Set up the recorder to track text changes
var recorder = new Recorder.TextAreaRecorder(HTMLTextAreaElement);

// Play the recording back into the supplied element
recorder.play(HTMLTextAreaElement);
```

**[CodeMirror](http://codemirror.net/)**

```javascript

// editorInstance = CodeMirror(yourElement);

var recorder = new Recorder.CodeMirrorRecorder(editorInstance);

// Playback via another Codemirror instance or a textarea if you prefer
recorder.play(anotherEditorInstance);
```

**Additional commands**

```javascript

// Clear the last recording
recorder.clear()

// Get a JSON representation of the deltas
recorder.getRecording();
```

### License

MIT