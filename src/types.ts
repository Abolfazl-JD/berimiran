export interface DefaultDataType{
    header: {
        title: string
        links: LinkType[]
        welcome: WelcomeItems[]
    }
    about: AboutItems
    sections: {
        popular: {
            title : string
        }
        contactus: {
            title: string
            subtitle: string
            text: string
        }
        recommended: {
            title : string
        }
        services: {
            title: string
            info : InfoItem[]
        }
    }
    footer: {
        sections: FooterSectionType[]
        contact: {
            title: string
            social: {
                addresses : AddressType[]
                icons: string[]
            }
        }
        copyright : string
    }
}


interface LinkType {
    name: string
    id: string
    link : string
}

interface WelcomeItems {
    text: string
    button: string
    id : string
    imageLink : string
}

interface AboutItems {
    subtitle: string
    title: string
    paragraphs: string[]
    button: string
}

interface InfoItem {
    title: string
    icon: string
    id: string
    text: string
}

interface FooterLinkType {
    text: string
    address: string
    id : string
}

interface FooterSectionType {
    title: string
    links: FooterLinkType[]
    id : string
}

interface AddressType {
    name : string
    text: string
    id: string
    icon : string
}


export type unitedsType  = singleUnited[]

export interface singleUnited {
    title: string
    name : string
    nickedName: string
    id : string
    stars: number,
    island : boolean
    cities : singleCity[]
}

interface singleCity {
    title: string
    name: string
    id: string
    nickedName: string
    imgLink: string
    location: string
    tourismSites : singlePlace[]
}

interface singlePlace {
    title: string
    name: string
    id: string
    siteLink : string
}