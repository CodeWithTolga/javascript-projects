//=========== FILE IMAGE DOSYALARINI YÜKLEMEK İÇİN 2 YOL VARDIR 
const form = document.querySelector("form");
const file = form.querySelector("input");
const image = form.querySelector("img");

const imageSetting = () => {
    //==== 1.YOL

    input.onchange = (e) => {
        //URL.createObjectURL() => resim, video, medya dosyalarını yüklemek için kullanılır
        let url = URL.createObjectURL(e.target.files[0]);
        image.src = url;

        //onload() => yüklendiğinde 
        image.onload = () => {
            //URL.revokeObjectURL() => URL.createObjectURL() tarafından gelen url tarayıcıda serbest bırakır yani açma işlemi yapar!
            URL.revokeObjectURL(url);
        }
    }

    //===== 2.YOL 

    input.addEventListener("change", (e) => {
        const file = e.target.files[0];

        //eğer doğru ise
        if(file){
            //dosya okuma işlemini çağırma
            const reader = new FileReader();

            //yüklendiği zaman
            reader.onload = (e) => {
                //image.src gelen "e" eşitleme
                image.src = e.target.result;
            }
            //readAsDataURL() => gelen URL bilgisi okur ve dışarıya aktarır..
            reader.readAsDataURL(file);
        }
    });
}





form.addEventListener("click", () => input.click());

form.addEventListener("click", imageSetting);