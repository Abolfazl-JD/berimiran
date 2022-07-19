export interface DefaultDataType{
    header: {
        title: string,
        links: LinkType[]
        welcome: WelcomeItems[]
    },
    about: AboutItems
    sections: {
        popular: {
            title : string
        }
        contactus: {
            title: string
            subtitle: string
            text: string,
            imageLink : ""
        }
        recommended: {
            title : string
        }
        services: {
            title: string
            info : InfoItem[]
        }
    },
    footer: {
        sections: FooterSectionType[]
        contact: {
            title: string,
            social: {
                addresses : AddressType[]
                icons: string[]
            }
        },
        copyright : string
    }
}

export interface LinkType {
    name: string,
    id: string,
    link : string
}

export interface WelcomeItems {
    text: string,
    button: string,
    id : string,
    imageLink : string
}

interface AboutItems {
    subtitle: string,
    title: string,
    paragraphs: string[]
    button: string,
    imageLink : ""
}

interface InfoItem {
    title: string,
    icon: string,
    id: string,
    text: string
}

interface FooterLinkType {
    text: string,
    address: string,
    id : string
}

interface FooterSectionType {
    title: string,
    links: FooterLinkType[]
    id : string
}

interface AddressType {
    name : string,
    text: string,
    id: string,
    icon : string
}