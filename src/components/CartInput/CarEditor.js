import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.bubble.css';
import axiosClient from 'src/configs/axios';
const ReactQuill = dynamic( import( 'react-quill' ), { ssr: false } );

const configModules = {
    short: {
        toolbar: [
            [ 'bold', 'italic', 'underline', 'strike' ],        // toggled buttons
            [ { 'color': [] }, { 'background': [] } ],          // dropdown with defaults from theme
            [ { 'align': [] } ]
        ],
        clipboard: {
            matchVisual: false
        }
    },
    full: {
        toolbar: [
            [ 'bold', 'italic', 'underline', 'strike' ],        // toggled buttons
            [ 'blockquote', 'code-block' ],
            [ { 'header': 1 }, { 'header': 2 } ],               // custom button values
            [ { 'list': 'ordered' }, { 'list': 'bullet' } ],
            [ { 'script': 'sub' }, { 'script': 'super' } ],      // superscript/subscript
            [ { 'indent': '-1' }, { 'indent': '+1' } ],          // outdent/indent
            [ { 'direction': 'rtl' } ],                         // text direction

            [ { 'size': [ 'small', false, 'large', 'huge' ] } ],  // custom dropdown
            [ { 'header': [ 1, 2, 3, 4, 5, 6, false ] } ],

            [ { 'color': [] }, { 'background': [] } ],          // dropdown with defaults from theme
            [ { 'font': [] } ],
            [ { 'align': [] } ],
            [ 'clean' ]
        ],
        clipboard: {
            matchVisual: false
        }
    }
};

const useHtmlEditor = ( html ) => {
    const div = document.createElement( 'div' );
    div.innerHTML = html.trim();
    const spans = div.querySelectorAll( 'span' );
    spans.forEach( ( span ) => {
        let cloneSpan = span.outerHTML;
        span.classList.add( 'ql-size-small' );
        html = html.replace( cloneSpan, span.outerHTML );
    } );
    return html;
};

function CarEditor( { value, field, theme = "bubble", ...props } ) {
    const modules = theme === "bubble" ? configModules.short : configModules.full;
    
    const handleBlur = async ( previousRange, source, editor ) => {
        const settings = await axiosClient.post( "@/settings/update", {
            key: field,
            value: editor.getHTML()
        } );
    };

    return (
        <ReactQuill
            value={ useHtmlEditor(value) }
            modules={ modules }
            theme={ theme }
            onBlur={ handleBlur }
            { ...props }
        />
    )
}

export default CarEditor;
