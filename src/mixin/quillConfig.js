const quillModules = {
  toolbar: [
    [{size: []}],
    [{ 'font': [] }],
    [{ 'color': [] }, { 'background': [] }], 
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      {'list': 'ordered'}, {'list': 'bullet'}, 
      {'indent': '-1'}, {'indent': '+1'}
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
  ImageResize: {
    modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
  }   
}

export default quillModules