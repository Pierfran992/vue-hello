const {createApp} = Vue;

createApp ({
    data() {
        return {
            title1: "HELLO",
            title2: "WORLD",
            titleClassPosition: "title_position",
            titleClass1: "title1",
            titleClass2: "title2",
            img: "img/hello-world-recensione-storia-d-amore-sci-fi-netflix-recensione-v4-54773-1280x16.webp",
            imgClass: "styleImg",
            descImg: "Trama: A Kyoto nell'anno 2027, Naomi Katagaki, uno studente di un liceo maschile, incontra una persona che afferma di essere egli stesso ma proveniente dal futuro, precisamente dal 2037. Il suo obiettivo è salvare una compagna di classe, Ruri, che il Naomi del presente inizierà a frequentare fra tre mesi.",
            descImgClass: "desc_img"
        }
    }
}).mount("#myapp");