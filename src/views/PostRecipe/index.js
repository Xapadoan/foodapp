import React from 'react';
import { Form } from '../../components';

const PostRecipe = () => {
  const fields = [
    {
      type: "text_input",
      name: "Name",
      minLength: 3,
      maxLength: 100,
      placeholder: 'Name of the recipe',
      required: true,
    },
    {
      type: "text_area",
      name: "Description",
      maxLength: 500,
    },
    {
      type: "separation",
      name: "Ingrediants",
    }
  ];
    return (
        <div>
            <p>You can post a Recip here: </p>
            <Form
              method='POST'
              action=''
              fields={fields}
              button_value="Send a new recipe"
            />
        </div>
    );
};

export default PostRecipe;