import { v4 as uuid } from "uuid"
import { DefaultDataType } from "@/types"

const defaultData : DefaultDataType = {
    header: {
        title: "بریم ایران",
        links: [
            {
                name: "صفحه اصلی",
                id: uuid(),
                link : "/"
            },
            {
                name: "درباره ما",
                id: uuid(),
                link : "/about-us"
            },
            {
                name: "انتخاب مقصد",
                id: uuid(),
                link : "/destination-choose"
            },
            {
                name: "سوغاتی",
                id: uuid(),
                link : "/souvenirs"
            }
        ],
        welcome: [
            {
                text: "با بریم ایران سفرتان را به یاد ماندنی کنید",
                button: "مکان های دیدنی استان ها",
                id : uuid(),
                imageLink : ""
            },
            {
                text: "قصد سفر به کجا داری ؟",
                button: "انتخاب مقصد سفر",
                id : uuid(),
                imageLink : ""
            },
            {
                text: "با بریم ایران سفرتان را به یاد ماندنی کنید",
                button: "به اشتراک گذاشتن تجربیات",
                id : uuid(),
                imageLink : ""
            }
        ]
    },
    about: {
        subtitle: "به سایت بریم ایران خوش آمدید",
        title: "وقتش رسیده که ماجراجوییت رو در ایران شروع کنی",
        paragraphs: [
            "بریم ایران به شما کمک می کند تا با جاذبه های گردشگری ایران آشنا شوید . هدف اصلی این سایت کمک به شما عزیزان برای انتخاب مقصد مناسب گردشگری میباشد",
            "همچنین شما می توانید تجربیات خودتان را از سفر به شهر های مختلف در صفحه مخصوص همان شهر با ما به اشتراک بگذارید"
        ],
        button: "درباره ما",
        imageLink : ""
    },
    sections: {
        popular: {
            title : "محبوب ترین استان ها برای سفر"
        },
        contactus: {
            title: "تجربیات سفر خود را با ما به اشتراک بگذارید",
            subtitle: "با ما در ارتباط باشید و ما را همراهی کنید",
            text: "ارتباط با ما",
            imageLink : ""
        },
        recommended: {
            title : "مقاصد گردشگری پیشنهاد شده برای شما"
        },
        services: {
            title: "خدمات سایت بریم ایران",
            info : [
                {
                    title: "بهترین همراه در سفر های شما",
                    icon: "",
                    id: uuid(),
                    text : "ما این اختیار را برای شما فراهم کردیم تا در صورت بهره مندی از این سایت تجربیات سفر خود رو با ما به اشتراک بگذارید تا بتوانیم ایران عزیزمان را بهتر بشناسیم"
                },
                {
                    title: "بهترین راهنمای سفر",
                    icon: "",
                    id: uuid(),
                    text : "بریم ایران به شما کمک می کند در انتخاب مقصد خود بهترین انتخاب رو داشته باشید و همچنین پس از انتخاب مقصد ؛ شما را با تمام جاذبه های گردشگری دیدنی مقصد مورد نظر خود آشنا می کند"
                },
                {
                    title: "نمایش مکان دقیق",
                    icon: "",
                    id: uuid(),
                    text : "بریم ایران برای دسترسی آسان تر شما به جاذبه های گردشگری کشورمان همراه با معرفی هر جاذبه گردشگری لوکیشن مربوط به آن را قرار داده است تا مسیری هموار برای شما عزیزان مهیا کرده باشد"
                }
            ]
        }
    },
    footer: {
        sections: [
            {
                title: "صفحه ها",
                links: [
                    {
                        text: "صفحه اصلی",
                        address: "",
                        id : uuid()
                    },
                    {
                        text: "دیدنی های شهر های ایران",
                        address: "",
                        id : uuid()
                    },
                    {
                        text: "کجا میخوای بری؟",
                        address: "",
                        id : uuid()
                    },
                    {
                        text: "درباره ما",
                        address: "",
                        id : uuid()
                    },
                    {
                        text: "سوغاتی",
                        address: "",
                        id : uuid()
                    },
                ],
                id : uuid()
            },
            {
                title: "محبوب ترین استان ها",
                links: [
                    {
                        text: "استان فارس",
                        address: "",
                        id : uuid()
                    },
                    {
                        text: "استان اصفهان",
                        address: "",
                        id : uuid()
                    },
                    {
                        text: "استان گیلان",
                        address: "",
                        id : uuid()
                    },
                    {
                        text: "استان مازندران",
                        address: "",
                        id : uuid()
                    }
                ],
                id : uuid()
            },
            {
                title: "مقاصد پیشنهادی",
                links: [
                    {
                        text: "استان اردبیل",
                        address: "",
                        id : uuid()
                    },
                    {
                        text: "استان لرستان",
                        address: "",
                        id : uuid()
                    },
                    {
                        text: "جزیره کیش",
                        address: "",
                        id : uuid()
                    },
                    {
                        text: "استان زنجان",
                        address: "",
                        id : uuid()
                    }
                ],
                id : uuid()
            }
        ],
        contact: {
            title: "منتظر انتقادات و پیشنهادات شما هستیم",
            social: {
                addresses : [
                    {
                        name : "gmail",
                        text: "abolfazljdst@gmail.com",
                        id: uuid(),
                        icon : ""
                    },
                    {
                        name : "phone",
                        text: "+98 9101522273",
                        id: uuid(),
                        icon : ""
                    }
                ],
                icons: [
                    "", "", ""
                ]
            }
        },
        copyright : "تمامی حقوق این وب سایت برای بریم ایران محفوظ است©"
    }
}

export default defaultData