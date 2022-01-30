import {
  useState,
  //useEffect
} from "react";
import { graphql } from 'react-apollo';
import { getProjectsQuery } from '../queries/queries';

function AddTask(props) {
  const [inputs, setInputs] = useState({
    title: '',
    weight: 1,
    description: '',
    projectId: ''
  });

  const handleChange = (e) => {
    const newInputs = {
      ...inputs
    };
    newInputs[e.target.name] = e.target.value
    setInputs(newInputs)
  }

  function displayProjects() {
    // console.log(props.data);
    const data = props.data;

    if (data.loading) {
      return (<option disabled>Loading projects...</option>);
    } else {
      return data.projects.map(project => {
          return (
            <option
              key={project.id}
              value={project.id}
            >
              {project.title}
            </option>
          );
      })
    }
  }

  return (
    <form
      className="task"
      id="add-task"
      /*onSubmit = {...}*/ >
      <div className="field" >
        <label> Task title: </label>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={inputs.title}
          required/>
      </div>
      <div className="field" >
        <label> Weight: </label>
        <input
          type="number"
          name="weight"
          onChange={handleChange}
          value={inputs.weight}
          required/>
      </div>
      <div className="field">
        <label> description: </label>
        <textarea
          name="description"
          onChange={handleChange}
          value={inputs.description}
          required/>
      </div>
      <div className="field">
        <label> Project: </label>
        <select
          name="projectId"
          onChange={handleChange}
          value={inputs.projectId}
          required>
          <option
            value=""
            disabled="disabled">Select project
          </option>
          {displayProjects()}
        </select>
      </div>
      <button> + </button>
    </form>
  );
}

export default graphql(getProjectsQuery)(AddTask);
