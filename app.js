function toggleBold() {
    var textArea = document.getElementById('textArea');
  




    if (textArea.style.fontWeight === 'bold') {
        textArea.style.fontWeight = '';
        
    } else {
        textArea.style.fontWeight = 'bold';
       
    }
}





function toggleItalic() {
    var textArea = document.getElementById('textArea');
   

    if (textArea.style.fontStyle === 'italic') {
        textArea.style.fontStyle = '';
       
    } else {
        textArea.style.fontStyle = 'italic';
       
    }
}




function changeFontSize() {
    var textArea = document.getElementById('textArea');
   
    var fontSizeSelect = document.getElementById('fontSizeSelect');

    textArea.style.fontSize = fontSizeSelect.value + 'px';
    
}



function toggleUnderline() {
    var textArea = document.getElementById('textArea');
  




    if (textArea.style.textDecoration === 'underline') {
        textArea.style.textDecoration = '';
        
    } else {
        textArea.style.textDecoration = 'underline';
       
    }
}