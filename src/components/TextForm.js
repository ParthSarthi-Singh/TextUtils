import React, { useState } from 'react'


export default function TextForm(props) {
	const [text, setText] = useState('')
	const [result, setResultText] = useState('')
	const [wordCount, setWordCount] = useState(0)
	// const [emails, setEmailText] = useState([])

	const handleUpClick = () => {
		let newText = text.toUpperCase();
		setResultText(newText)
	}

	const handleLowClick = () => {
		let newText = text.toLowerCase();
		setResultText(newText)
	}

	const handleOnChange = (event) => {
		setText(event.target.value)

		let wordCount = text === "" || text.trim().length===0 ? 0 : text.endsWith(" ") ? text.split(' ').length - 1 : text.split(' ').length
		setWordCount(wordCount)
	}

	const handleClearText = () => {
		setResultText("")
		setText("")
	}

	const handleEmailExtract = () => {
		let emailText = text.split(" ")

		let resultEmails = ""
		setResultText(" ")
		// eslint-disable-next-line
		let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		emailText.forEach((address) => {
			if (address.match(regex)) {
				resultEmails = resultEmails + " " + address
			}

		})
		setResultText(resultEmails)
	}

	const handleTextCopy = () =>{
		const text = document.getElementById("myTextBox")
		text.select()
		navigator.clipboard.writeText(text.value)
		
	}
	const handleResultTextCopy = () =>{
		const text = document.getElementById("myResultBox")
		text.select()
		navigator.clipboard.writeText(text.value)
	}
    const handleExtraSpaces = () =>{
		
		let newText = text.split(/[ ]+/)
		setResultText(newText.join(" "))
		setText(newText.join(" "))
	}
	return (
		<>
			<div className='container' style={{ color : props.mode==='dark' ? 'white':'black'}}>

				<h1>{props.heading}</h1>
				<div className="mb-3">
					<textarea className="form-control" id="myTextBox" rows="8" value={text} placeholder="Enter text here..." onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'#00090985':'white'}}></textarea>
				</div>

				<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
				<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
				<button className="btn btn-primary mx-1" onClick={handleEmailExtract}>Extract Email</button>
				<button className="btn btn-primary mx-1" onClick={handleTextCopy}>Copy TextBox</button>
				<button className="btn btn-primary mx-1" onClick={handleResultTextCopy}>Copy ResultBox</button>
				<button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
				<button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
			</div>
			<div className='container my-3' style={{ color : props.mode==='dark' ? 'white':'black'}}>
				<h1>Your text summary</h1>
				<p>{wordCount} words, {text.length} characters </p>
				<p>{0.008 * (wordCount)} minutes to read</p>
				<h2>Preview</h2>
				<p id='myResultBox'>{result.length>0 ? result : "Enter text to see the result"}</p>
			</div>
		</>
	)
}
