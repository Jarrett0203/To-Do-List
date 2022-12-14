(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{Z:()=>o});const t=[],n=function(e){const n=document.querySelector(".todos");n.textContent="",n.append(function(e){const n=document.createElement("div"),d=document.createElement("p"),a=document.createElement("div"),c=document.createElement("button"),s=document.createElement("i"),l=document.createElement("div");return n.classList.add("inboxDiv"),d.textContent=e.textContent,d.classList.add("title"),a.classList.add("taskList"),0!=t.length&&(a.style.display="flex"),s.classList.add("fa-solid","fa-plus"),c.textContent="Add Task",c.classList.add("taskElement"),c.addEventListener("click",(e=>o(e.target))),l.classList.add("addTaskPopup"),c.prepend(s),n.append(d),n.append(a),n.append(c),n.append(l),n}(e))};document.querySelector(".projectList");const d=document.querySelectorAll(".navElement"),a=document.querySelector(".addProjectPopup");function c(e){const t=document.createElement("div"),d=document.createElement("input"),c=document.createElement("button"),s=document.createElement("button");d.classList.add("name"),d.setAttribute("type","text"),c.classList.add("add"),s.classList.add("cancel"),e.style.display="none",c.textContent="Add",s.textContent="Cancel",s.addEventListener("click",(()=>{e.style.display="flex",t.remove()})),t.append(d),t.append(c),t.append(s),"addProject"==e.id?(t.classList.add("addProjectDiv"),c.addEventListener("click",(()=>{e.style.display="flex",t.remove()})),a.append(t)):(t.classList.add("addTaskDiv"),c.addEventListener("click",(()=>{n(d),e.style.display="flex",t.remove()})),document.querySelector(".addTaskPopup").append(t))}var s;d.forEach((e=>e.addEventListener("click",(e=>function(e){if(e.classList.contains("navElement")){if(e.classList.contains("active"))return;"addProject"==e.id?c(e):(n(e.id),function(e){d.forEach((t=>{t!==e&&t.classList.remove("active")})),e.classList.add("active")}(e))}}(e.target))))),s=document.getElementById("Inbox"),n(s);const o=c})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FDdEIsR0FBSUEsRUFBT2QsVUFBVXVCLFNBQVMsY0FBZSxDQUMzQyxHQUFJVCxFQUFPZCxVQUFVdUIsU0FBUyxVQUFXLE9BQ3hCLGNBQWJULEVBQU9PLEdBQW9CUixFQUFVQyxJQUV2QyxFQUFVQSxFQUFPTyxJQU12QixTQUF5QlAsR0FDdkJKLEVBQVFZLFNBQVNFLElBQ1hBLElBQU1WLEdBQVFVLEVBQUV4QixVQUFVb0IsT0FBTyxTQUFTLElBRWhETixFQUFPZCxVQUFVQyxJQUFJLFNBQ3ZCLENBVk13QixDQUFnQlgsR0FFcEIsQ0FDRixDQWhCMENZLENBQWVwQixFQUFFQyxZQUd0Q08sRUFpRVR6QixTQUFTc0MsZUFBZSxTQWhFbEMsRUFBVWIsR0FrRVosUyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy8uL3NyYy9pbmJveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IGFkZFByb21wdCBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5cclxuY29uc3QgdGFza3MgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUluYm94KGJ0bikge1xyXG4gICAgY29uc3QgaW5ib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBjb25zdCBhZGRUYXNrUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBpbmJveERpdi5jbGFzc0xpc3QuYWRkKCdpbmJveERpdicpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBidG4udGV4dENvbnRlbnQ7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG4gICAgXHJcbiAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrTGlzdCcpO1xyXG4gICAgaWYgKHRhc2tzLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgdGFza0xpc3Quc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBsb2FkVGFza3MoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYWRkSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1wbHVzJyk7XHJcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcclxuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgndGFza0VsZW1lbnQnKTtcclxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gYWRkUHJvbXB0KGUudGFyZ2V0KSk7XHJcblxyXG4gICAgYWRkVGFza1BvcHVwLmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2tQb3B1cCcpO1xyXG4gICAgXHJcbiAgICBhZGRUYXNrQnRuLnByZXBlbmQoYWRkSWNvbik7XHJcbiAgICBpbmJveERpdi5hcHBlbmQodGl0bGUpO1xyXG4gICAgaW5ib3hEaXYuYXBwZW5kKHRhc2tMaXN0KTtcclxuICAgIGluYm94RGl2LmFwcGVuZChhZGRUYXNrQnRuKTtcclxuICAgIGluYm94RGl2LmFwcGVuZChhZGRUYXNrUG9wdXApO1xyXG4gICAgXHJcbiAgICByZXR1cm4gaW5ib3hEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRJbmJveChidG4pIHtcclxuICAgIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJyk7XHJcbiAgICB0b2Rvcy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICB0b2Rvcy5hcHBlbmQoY3JlYXRlSW5ib3goYnRuKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2sobmFtZSkge1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFRhc2tzKCkge1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRJbmJveDsiLCJpbXBvcnQgYWRkUHJvbXB0IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcblxyXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdExpc3RcIik7XHJcblxyXG5mdW5jdGlvbiBsb2FkUHJvamVjdHMoKSB7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZFByb2plY3Q7IiwiaW1wb3J0IGxvYWRJbmJveCBmcm9tIFwiLi9pbmJveC5qc1wiO1xyXG5pbXBvcnQgYWRkVGFzayBmcm9tIFwiLi9pbmJveC5qc1wiO1xyXG5pbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xyXG5cclxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2RWxlbWVudFwiKTtcclxuY29uc3QgYWRkUHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0UG9wdXBcIik7XHJcblxyXG5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT5cclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBoYW5kbGVOYXZDbGljayhlLnRhcmdldCkpXHJcbik7XHJcblxyXG5mdW5jdGlvbiBsb2FkV2Vic2l0ZShidXR0b24pIHtcclxuICBsb2FkSW5ib3goYnV0dG9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTmF2Q2xpY2soYnV0dG9uKSB7XHJcbiAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXZFbGVtZW50XCIpKSB7XHJcbiAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG4gICAgaWYgKGJ1dHRvbi5pZCA9PSBcImFkZFByb2plY3RcIikgYWRkUHJvbXB0KGJ1dHRvbik7XHJcbiAgICBlbHNlIHtcclxuICAgICAgbG9hZEluYm94KGJ1dHRvbi5pZCk7XHJcbiAgICAgIHNldEFjdGl2ZUJ1dHRvbihidXR0b24pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbikge1xyXG4gIGJ1dHRvbnMuZm9yRWFjaCgoYikgPT4ge1xyXG4gICAgaWYgKGIgIT09IGJ1dHRvbikgYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9tcHQoYnV0dG9uKSB7XHJcbiAgY29uc3QgYWRkUHJvbXB0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHJcbiAgbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICBuYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkXCIpO1xyXG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsXCIpO1xyXG5cclxuICBidXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XHJcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcclxuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBhZGRQcm9tcHREaXYucmVtb3ZlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkZFByb21wdERpdi5hcHBlbmQobmFtZSk7XHJcbiAgYWRkUHJvbXB0RGl2LmFwcGVuZChhZGRCdG4pO1xyXG4gIGFkZFByb21wdERpdi5hcHBlbmQoY2FuY2VsQnRuKTtcclxuXHJcbiAgaWYgKGJ1dHRvbi5pZCA9PSBcImFkZFByb2plY3RcIikge1xyXG4gICAgYWRkUHJvbXB0RGl2LmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9qZWN0RGl2XCIpO1xyXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGFkZFByb2plY3QobmFtZSk7XHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgIGFkZFByb21wdERpdi5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gICAgYWRkUHJvamVjdFBvcHVwLmFwcGVuZChhZGRQcm9tcHREaXYpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhZGRQcm9tcHREaXYuY2xhc3NMaXN0LmFkZChcImFkZFRhc2tEaXZcIik7XHJcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgYWRkVGFzayhuYW1lKTtcclxuICAgICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgYWRkUHJvbXB0RGl2LnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBhZGRUYXNrUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tQb3B1cFwiKTtcclxuICAgIGFkZFRhc2tQb3B1cC5hcHBlbmQoYWRkUHJvbXB0RGl2KTtcclxuICB9XHJcbn1cclxuXHJcbmxvYWRXZWJzaXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiSW5ib3hcIikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkUHJvbXB0O1xyXG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImV4cG9ydHMiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJ0YXNrcyIsImJ0biIsInRvZG9zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJhcHBlbmQiLCJpbmJveERpdiIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZSIsInRhc2tMaXN0IiwiYWRkVGFza0J0biIsImFkZEljb24iLCJhZGRUYXNrUG9wdXAiLCJjbGFzc0xpc3QiLCJhZGQiLCJsZW5ndGgiLCJzdHlsZSIsImRpc3BsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsInByZXBlbmQiLCJjcmVhdGVJbmJveCIsImJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkUHJvamVjdFBvcHVwIiwiYWRkUHJvbXB0IiwiYnV0dG9uIiwiYWRkUHJvbXB0RGl2IiwibmFtZSIsImFkZEJ0biIsImNhbmNlbEJ0biIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSIsImlkIiwiZm9yRWFjaCIsImNvbnRhaW5zIiwiYiIsInNldEFjdGl2ZUJ1dHRvbiIsImhhbmRsZU5hdkNsaWNrIiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9