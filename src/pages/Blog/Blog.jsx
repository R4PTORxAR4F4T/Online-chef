import React from 'react';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';
import { FaDownload } from 'react-icons/fa';

const blog = () => {

    const MyDocument = () => (
        <Document>
          <Page>
            <Text>Blog page costais the answers of the required questin asked for.</Text>
          </Page>
        </Document>
      );
    return (
        
        <div className='w-75 border border-secondary mx-auto p-4'>
            <p className=' text-center fs-2 fw-bolder'>Here is the question</p>
            <div className=' border border-1 border-secondary p-4 rounded-3 m-4'>
                <span className=' fs-6 fw-bolder  text-danger'>Tell us the differences between uncontrolled and controlled components.</span>
                <p className=' fs-6 fw-bolder text-success'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div className=' border border-1 border-secondary p-4 rounded-3 m-4'>
                <span className=' fs-6 fw-bolder  text-danger'>How to Validate React Props Using PropTypes</span>
                <p className=' fs-6 fw-bolder text-success'>React is a JavaScript library used for creating interactive web frontend applications. It is one of the most popular libraries because of its easy-to-use API.

                We combine components into an app by passing data from parent components to child components. To do this, we pass data with props. Props are like HTML attributes, but they can contain dynamic data.

                A parent component passes props down to child components. And child components receive them. We can pass any data as props. Therefore, we need a way to validate their data type so that the child component gets what they expect.

                In this article, we will look at how to validate prop data types with the prop-types library</p>
            </div>
            <div className=' border border-1 border-secondary p-4 rounded-3 m-4'>
                <span className=' fs-6 fw-bolder  text-danger'>Tell us the difference between nodejs and express js.</span>
                <p className=' fs-6 fw-bolder text-success'>
                Node.js is a server-side JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. It is built on top of the Google V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it well-suited for building scalable and high-performance network applications.</p>

                <p className=' fs-6 fw-bolder text-success'>Express.js, on the other hand, is a web application framework for Node.js. It provides a set of features and tools for building web applications and APIs, including routing, middleware, and HTTP utilities. Express.js is designed to be lightweight and unopinionated, which means that it gives developers a lot of flexibility to structure their applications in a way that works best for them.
                </p>
            </div>
            <div className=' border border-1 border-secondary p-4 rounded-3 m-4'>
                <span className=' fs-6 fw-bolder  text-danger'>What is a custom hook, and why will you create a custom hook?</span>
                <p className=' fs-6 fw-bolder text-success'>What is a custom hook?
                A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.</p>
                <p className=' fs-6 fw-bolder text-success'>The main reason to write a custom hook is for code reusability.it can be reused easily, which makes the code cleaner and reduces the time to write the code</p>
            </div>

            <p className=' fs-2 fw-bolder'>React to pdf</p>
            <PDFDownloadLink document={<MyDocument />} fileName="myDocument.pdf">
            <button><FaDownload /> Download PDF</button>
            </PDFDownloadLink>
        </div>
    );
};

export default blog;