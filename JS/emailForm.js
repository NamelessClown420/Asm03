'use strict';
const personalInfo = document.querySelector("#mt-40-info");
const personalIcon = document.querySelector('#personal-info>div');
const emailForm = document.querySelector('#emailForm');
const emailEl = document.querySelector('#emailForm>input');
const emailHint=document.querySelector('#emailForm>span:first-of-type');
const btn = document.querySelector('#emailForm>button');
const emailError = document.querySelector('#emailError');
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function emailCheck(){
    if (regex.test(emailEl.value)){
        personalInfo.classList.remove('hidden');
        personalIcon.classList.remove('hidden');
        emailForm.classList.add('hidden');
    } else{
        emailError.classList.remove('hidden');
        emailHint.classList.add('hidden');
    }
};
btn.addEventListener('click', emailCheck);