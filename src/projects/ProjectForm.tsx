import { SyntheticEvent } from "react";
import { Project, ProjectFormProps } from "./Project";

export function ProjectForm({ onCancel, onSave }: ProjectFormProps){

    const handleCancelClick = () => onCancel();

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        onSave(new Project({name: 'Updated Project'}));
    }

    return (
        <form className="input-group vertical" onSubmit={handleSubmit}>
            <label htmlFor="name">Project Name</label>
            <input type="text" name="name" placeholder="enter name" />

            <label htmlFor="description">Project Description</label>
            <textarea name="description" placeholder="enter description"></textarea>
            
            <label htmlFor="budget">Project Budget</label>
            <input type="number" name="budget" placeholder="enter budget" />
            
            <label htmlFor="isActive">Active?</label>
            <input type="checkbox" name="isActive" />

            <div className="input-group">
                <button className="primary bordered medium">Save</button>
                <span></span>
                <button type="button" className="bordered medium" onClick={handleCancelClick}>Cancel</button>
            </div>
        </form>
    );
}