import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CourseForm } from './component';

const App = () => {

    return(<CourseForm />)
}

ReactDOM.render(<App />, document.getElementById('app'))