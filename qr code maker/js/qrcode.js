function QrcodeGenerator(){
    let qr = document.getElementById('qrcode'); 
    qr.innerHTML="";

    var inputElement=document.getElementById('site_Url').value;

    const qrcode=new QRCode(qr,{
        text:inputElement? inputElement:'https://televein.in',

        width: 250,
        height: 250,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}


function downloadQR(){
    let dataUrl=document.querySelector('#qrcode').querySelector('img').src;
    var link=document.createElement('a');
    link.download='qrcode.png';
    link.href=dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;

    
}


//copy Image to Clipboard
function copyQR(){
    let img=document.querySelector('#qrcode').querySelector('img');
    const canvas=document.createElement('canvas');
    canvas.width=img.width;
    canvas.height=img.height;
    canvas.getContext('2d').drawImage(img,0,0,img.width,img.height);
    canvas.toBlob((blob)=>{
        navigator.clipboard.write([new ClipboardItem({'image/png':blob})]);
    },'image/png');
    console.log('success');
}