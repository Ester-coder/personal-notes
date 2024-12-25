import React from "react";

class NoteInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: ''
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    onTitleChangeEventHandler(ev){
        const title = ev.target.value;
        if(title.length <= 50){
            this.setState({title})
        }
    }
    onBodyChangeEventHandler(ev){
        this.setState(()=>({body: ev.target.value}));
    }
    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState({ title: '', body: '' });
    }
    render(){
        const remainCharacters = 50 - this.state.title.length;
        return (
            <div className="note-input" onSubmit={this.onSubmitEventHandler}>
                <h2>Buat Catatan</h2>
                <form>
                    <p className="note-input__title__char-limit">Sisa Karakter: {remainCharacters}</p>
                    <input 
                        type="text"
                        name="title"
                        className="note-input__title"
                        placeholder="Ini adalah judul ..."
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler}
                        required
                    />
                    <textarea 
                        name="body"
                        type="text"
                        className="note-input__body"
                        placeholder="Tuliskan catatanmu di sini ..."
                        value={this.state.body}
                        onChange={this.onBodyChangeEventHandler}
                        required
                    >
                    </textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;