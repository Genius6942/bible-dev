import Head from 'next/head';
import Shelf from './shelf';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

var booksOld = ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalm","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi"];
var booksNew = ["Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"];

class Curtain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			over: this.props.over,
		}
	}
	
	render() {
		return (
			<div className = { !this.state.over ? 'hidden' : ''}>
				<div className = 'bg-green-700 w-screen h-screen fixed'>
					<motion.div
						animate = {{ opacity: 1 }}
						transition = {{ duration: 1 }}
						className = 'opacity-0'
					>
						<button
							onClick = { () => {
								this.props.onOld()
							} }
							
							className = 'rounded-3xl p-10 m-10 h-96 text-white text-xl bg-blue-600 shadow-xl hover:shadow-2xl transition-shadow duration-200'
						>
							Old
							<br/>
							Testament
						</button>
						<button
							onClick = { () => {
								this.props.onNew();
							} }
							
							className = 'rounded-3xl p-10 m-10 h-96 text-white text-xl bg-blue-600 shadow-xl hover:shadow-2xl transition-shadow duration-200'
						>
							New
							<br/>
							Testament
						</button>
					</motion.div>
				</div>
			</div>
		)
	}
}

export default function Page() {
	useEffect(() => {
	})

	const [bookshelf, setBookshelf] = useState(null);
  return (
    <div>
      <Head>
        <title>Joshuas books</title>
      </Head>
      <main>
				<Curtain
					over = { true }
					onOld = {
						() => {
							setBookshelf(
								<motion.div
									initial = {{ scale: 0 }}
									animate = {{ scale: 1 }}
									transition = {{ duration: 1 }}
									className = 'fixed w-screen min-h-screen z-10 bg-white'
								>
									<button onClick = { () => { setBookshelf(null) } } className = 'fixed'>
										<img src = '/books-joshua/back.svg' className = 'w-16 h-16 ml-4 pointer cursor-pointer' style = {{ filter: 'invert(34%) sepia(63%) saturate(1326%) hue-rotate(80deg) brightness(95%) contrast(102%)' }}/>
									</button>
									<div className = 'max-h-screen overflow-auto flex justify-center items-center'>
										<Shelf books = { booksOld }/>
									</div>
								</motion.div>
							)
						}
					}
					onNew = {
						() => {
							setBookshelf(
								<motion.div
									initial = {{ scale: 0 }}
									animate = {{ scale: 1 }}
									transition = {{ duration: 1 }}
									className = 'fixed w-screen min-h-screen z-10 bg-white'
								>
									<button onClick = { () => { setBookshelf(null) } } className = 'fixed'>
										<img src = '/books-joshua/back.svg' className = 'w-16 h-16 ml-4 pointer cursor-pointer' style = {{ filter: 'invert(34%) sepia(63%) saturate(1326%) hue-rotate(80deg) brightness(95%) contrast(102%)' }}/>
									</button>
									<div className = 'h-screen overflow-auto flex justify-center items-center'>
										<Shelf books = { booksNew }/>
									</div>
								</motion.div>
							)
						}
					}
				/>
				<div className = 'h-screen'>
					<div className = 'flex items-center flex-col'>
						{ bookshelf }
					</div>
				</div>
      </main>
    </div>
  )
}

/*
<Curtain over = { false }/>
     <div className = 'h-screen'>
					<div className = 'flex items-center flex-col'>
						<Shelf books = { booksOld } hidden = { open !== 'old' }/> 
						<Shelf books = { booksNew } hidden = { open !== 'new' }/>
					</div>
				</div>
*/