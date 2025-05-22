import React from 'react'

function Faq() {

    const faqs = initialFaqs.map((faq)=>{
        return(
            <faqItem/>
        )
    })
    const initialFaqs = [
        {
          id: 1,
          question: "What is React and why should I use it?",
          answer: "React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components, manage state efficiently, and update the DOM with minimal overhead using a virtual DOM. Use React for its simplicity, performance, and strong ecosystem."
        },
        {
          id: 2,
          question: "How does state management work in React?",
          answer: "State in React is a built-in object that holds data affecting a component's rendering. You can manage state using the `useState` hook for functional components. When state updates, React re-renders the component to reflect the new data, making it dynamic and interactive."
        },
        {
          id: 3,
          question: "What is the difference between props and state?",
          answer: "Props are read-only data passed from parent to child components, used to configure or customize a component. State is mutable, managed within a component using `useState` or `useReducer`, and triggers re-renders when updated. Props are external; state is internal."
        },
        {
          id: 4,
          question: "How can I style a React component?",
          answer: "React components can be styled using CSS files (imported via `import './styles.css'`), inline styles (`style={{ color: 'blue' }}`), CSS-in-JS libraries (e.g., styled-components), or utility-first frameworks like Tailwind CSS, which you can integrate with Vite for fast builds."
        },
        {
          id: 5,
          question: "What is the purpose of useEffect in React?",
          answer: "The `useEffect` hook handles side effects in functional components, such as fetching data, updating the DOM, or setting up subscriptions. It runs after render and can be controlled with a dependency array to run only when specific values change."
        },
        {
          id: 6,
          question: "How do I create a modal in React?",
          answer: "To create a modal, use state (e.g., `useState`) to toggle its visibility. Render a modal overlay and content conditionally, styling them with CSS or Tailwind CSS. Use `position: fixed` for the overlay and `transform: translate` for centering the modal content."
        }
      ];
  return (
    <div>
        <h2>Faq</h2>
        <div className='faqOuter'>  

        </div>
    </div>
  )
}

function faqItem(){
    <div className='faqItem'>
    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis ut adipisci quia iusto tempora aut velit quo id beatae aperiam.</h2>
    <p>hello</p>
   
</div>
}

export {Faq , faqItem} 