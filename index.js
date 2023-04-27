const express = require('express');
const app = express();
const path = require('path');

const yellowWallpaperQuestions = [["The most battered thing in the narrator's room is"], ["The Wallpaper"]]

const afterwardQuestions = [["Who is the author of Afterward?"], ["Edith Wharton"]]

const belovedQuestions = [["What is the significance of the character Beloved in the novel Beloved", "rememory"]]

const magounQuestions = [["Who is the main character of Old Woman Magoune?", "Old Woman Magoune"]]

const desireesbabyQuestions = [["What is the setting of the story", "19th century"]]

const frankensteinQuestions = [["Who is convicted of the murder of Victor’s younger brother, William?", "Justine Moritz"], ["Who is accused of the murder of Henry Clerval?", "Victor Frankenstein"], 
["What does the monster want Victor to do to heal his loneliness?", "Create a female monster to be his companion"], ["Who takes care of Victor when he falls ill after creating the monster?", "Henry"] ];

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render("index.ejs");
})
app.get('/afterward', (req,res)=>{
    let QNANum = Math.floor(Math.random() * afterwardQuestions.length-1);
    if(QNANum < 0){
        QNANum = 0;
    }
    res.render("afterward.ejs", {QNA: {
        question: afterwardQuestions[QNANum][0],
        answer: afterwardQuestions[QNANum][1]
    }})
})
app.get('/frankenstein', (req,res)=>{
    let QNANum = Math.floor(Math.random() * frankensteinQuestions.length-1);
    if(QNANum < 0){
        QNANum = 0;
    }
    res.render("frankenstein.ejs", {QNA: {
        question: frankensteinQuestions[QNANum][0],
        answer: frankensteinQuestions[QNANum][1]
    }})
})
app.get('/beloved', (req,res)=>{
    let QNANum = Math.floor(Math.random() * belovedQuestions.length-1);
    if(QNANum < 0){
        QNANum = 0;
    }
    res.render("beloved.ejs", {QNA: {
        question: belovedQuestions[QNANum][0],
        answer: belovedQuestions[QNANum][1]
    }})
})
app.get('/desireesbaby', (req,res)=>{
    let QNANum = Math.floor(Math.random() * desireesbabyQuestions.length-1);
    if(QNANum < 0){
        QNANum = 0;
    }
    res.render("desireesbaby.ejs", {QNA: {
        question: desireesbabyQuestions[QNANum][0],
        answer: desireesbabyQuestions[QNANum][1]
    }})
})
app.get('/magoun', (req,res)=>{
    let QNANum = Math.floor(Math.random() * magounQuestions.length-1);
    if(QNANum < 0){
        QNANum = 0;
    }
    res.render("magoun.ejs", {QNA: {
        question: magounQuestions[QNANum][0],
        answer: magounQuestions[QNANum][1]
    }})
})
app.get('/yellowwallpaper', (req,res)=>{
    let QNANum = Math.floor(Math.random() * yellowWallpaperQuestions.length-1);
    if(QNANum < 0){
        QNANum = 0;
    }
    res.render("yellowwallpaper.ejs", {QNA: {
        question: yellowWallpaperQuestions[QNANum][0],
        answer: yellowWallpaperQuestions[QNANum][1]
    }})
})

app.listen(5000);