import { gql } from "apollo-server-express";

const tiposBlogpost = gql`
    type codeObj{
        language: String
        text: String
    }

    type mediaEmbed{
        caption: String
        url: String
    }

    type textAnnotations{
        bold: Boolean
        code: Boolean
        color: String
        italic: Boolean
        strikethrough: Boolean
        underline: Boolean
    }
    
    type blogParagraphchild{
        text: String
        annotations: textAnnotations
        hasurl: Boolean
        url: String
        ordered: Boolean
    }

    type blogParagraph{
        text: String
        annotations: textAnnotations
        hasurl: Boolean
        url: String
        list: Boolean
        childs: [blogParagraphchild]
    }

    type arrayBlogParagraph{
        paragraph: [blogParagraph]
        header1: [blogParagraph]
        header2: [blogParagraph]
        header3: [blogParagraph]
        category: [blogParagraph]
        image: mediaEmbed
        video: mediaEmbed
        embed: mediaEmbed
        code: codeObj
    }

    type BlopPost{
        blogparagraphs: [arrayBlogParagraph]
    }

    type Blog {
        id: String
        category: String
        emoji: String
        title: String
        imgsrc: String
    }    

    type Query {
        Blogs(
            blogPageId: String
            category: String
            title: String
        ): [Blog]    
        
        Blogpost(
            id: String
        ): BlopPost    
    }
`;

export { tiposBlogpost };
