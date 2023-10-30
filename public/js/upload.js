const realUploadBtn = document.getElementById("upload-file");
const customBtn = document.getElementById("upload_button");
const customText = document.getElementById("custom-text");

customBtn.addEventListener("click",function(){
    realUploadBtn.click();
});

realUploadBtn.addEventListener("change", function(){
    var allowedFiles = [".doc", ".docx"];
    var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + allowedFiles.join('|') + ")$");
    if(realUploadBtn.value){

        if(!regex.test(realUploadBtn.value.toLowerCase())){
            alert("Please upload DOC or DOCX file!");
        }
        else{
            customText.innerHTML=realUploadBtn.value.match( /[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]; //displays the path of the file
        }
           
    }          
    else{
        customText.innerHTML= "No file chosen, yet."
    }
});