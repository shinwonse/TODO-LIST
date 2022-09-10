import TitleStyles from 'styles/module/home/title.module.css';

export const Title = (props) => `
  <h1 id="form_title" class=${TitleStyles.Title}>
    ${props.text}
  </h1>
`;
