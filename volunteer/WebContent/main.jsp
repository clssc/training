<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

function finish()
{
var x = document.getElementById("form");
var txt = "";
for (var i=0; i<x.length; i++)
  {
  txt = txt + x.elements[i].value + "<br>";
  }
document.getElementById("demo").innerHTML=txt;
}

