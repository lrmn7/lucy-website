import React, { useEffect, useState, useRef } from "react";
import commandsFile from "./data/commands.json";
import Expandable from "../../components/Expandable";

import "../../assets/styles/pages/info/commands.scss";

export default function Commands() {
	const categories = useRef(Object.keys(commandsFile));
	const [category, setCategory] = useState(categories.current[0]);
	const [commands, setCommands] = useState(Object.values(commandsFile)[Object.keys(commandsFile).indexOf(category)]);
	const [categoryDropdown, setCategoryDropdown] = useState(false);
	const [hasEventListener, setHasEventListener] = useState(false);
	const [expandedIndex, setExpandedIndex] = useState(null);
	const [search, setSearch] = useState("");
	const [prefix, setPrefix] = useState("bb ");

	useEffect(() => {
		if(window.location.search && window.location.search.split("?")[1].split("=")[0] === "prefix") {
			setPrefix(`${window.location.search.split("?")[1].split("=")[1]} `);
			return window.history.pushState(null, null, "commands");
		}
		return () => {
			setPrefix("bb ");
		}
	}, []);

	useEffect(() => {
		setCommands([]);
		setCommands(Object.values(commandsFile)[Object.keys(commandsFile).indexOf(category)]);
	}, [category]);

	useEffect(() => {
		if(search.length >= 1) {
			setExpandedIndex(null);
			Object.values(commandsFile).flat().filter(command => {
				if(command.t.some(trigger => trigger.includes(search.toLowerCase())) || command.d.toLowerCase().includes(search.toLowerCase())) {
					setCommands(oldCommands => [...oldCommands, command]);
				}
			})
		} else {
			setCategory(categories.current[0]);
			setCommands(Object.values(commandsFile)[Object.keys(commandsFile).indexOf(category)]);
		}
		return () => {
			setCommands([]);
		}
	}, [search]);

	useEffect(() => {
		if(!categoryDropdown && hasEventListener) {
			document.getElementById("commands").removeEventListener("click", () => {
				setHasEventListener(false);
				return;
			});
		} else if(categoryDropdown && !hasEventListener) {
			setHasEventListener(true);
			document.getElementById("commands").addEventListener("click", (e) => {
				if(e.target !== document.getElementById("commands-top-dropdown") && e.target.parentNode !== document.getElementById("commands-top-dropdown-options")) {
					setCategoryDropdown(false);
				}
			});
		}
	}, [categoryDropdown])
	
	const changeCategory = (index) => {
		setSearch("");
		document.getElementById("commands-search").value="";
		setCategory(categories.current[index]);
		setExpandedIndex(null);
	}

	const expand = (index) => {
		setExpandedIndex(index.toString() && index === expandedIndex ? null : index);
	}

	return (
		<div id="commands">
			<div id="nitropay-commands-top" className="nitropay" />
			<div id="commands-header">
				<h1 id="commands-header-title">Commands</h1>
				<p id="commands-header-message">List of all commands available in Booster Bot with their descriptions and what permissions bot need to perform that command.<br/>Use <b>bb help [command]</b> in server to see detailed info on how to use any command.</p>
				<svg id="commands-header-circles" height="200" width="350">
					<circle cx="23" cy="130" r="22.5" fill="#242424"/>
					<circle cx="150" cy="73" r="73" fill="#242424"/>
					<circle cx="300" cy="140" r="22.5" fill="#242424"/>
				</svg>
			</div>
			<div id="commands-top">
				<div id="commands-top-dropdown">
					<p id="commands-top-dropdown-selected" onClick={() => setCategoryDropdown(!categoryDropdown)}>{category} <span>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 20" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
								<polyline points="6 9 12 15 18 9" />
							</svg>
					</span></p>
					{categoryDropdown ? <div id="commands-top-dropdown-options">
						{categories.current.filter(cat => cat !== category).map((cat, i) => (
							<p className="commands-top-dropdown-option" onClick={() => {
								changeCategory(categories.current.indexOf(cat));
								setCategoryDropdown(!categoryDropdown);
							}}>{cat}</p>
						))}
					</div> : ""}
				</div>
				<ul id="commands-top-tabs">
					{categories.current.map((cat, i) => (
						<li key={i} className={category === cat ? search.length >= 1 ? "commands-tab" : "commands-tab selected" : "commands-tab"} onClick={() => changeCategory(i)}>{cat}</li>
					))}
				</ul>
				<div id="commands-top-search">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<circle cx="10" cy="10" r="7" />
						<line x1="21" y1="21" x2="15" y2="15" />
					</svg>
					<input id="commands-search" name="search" placeholder="Search for a command..." onChange={(e) => setSearch(e.target.value)}/>
				</div>
			</div>
			<div id="commands-list-wrapper">
				<div id="commands-list">
					{commands.map((command, i) => (
						<Expandable
							key={i}
							index={i}
							prefix={prefix}
							name={command.t[0]}
							description={command.d.replace(/pls /g, prefix)}
							usage={command.u.replace("pls ", prefix)}
							permissions={command.p}
							star={command.pS ? true : false}
							expanded={expandedIndex === commands.indexOf(command)}
							type={"command"}
							setExpanded={expand}/>
					))}
				</div>
			</div>
	    <div id="nitropay-commands-bottom" className="nitropay" />
		</div>
	);
}