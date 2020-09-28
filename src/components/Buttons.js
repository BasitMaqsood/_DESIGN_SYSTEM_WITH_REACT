import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { typeScale } from '../utils';

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.header5};
        padding:16px 24px;
    `,

    warning: (props) => `
        background-color: ${props.theme.status.warningColor};
        color: ${props.theme.textColorInverted};

        &:hover, &:focus{
            background-color: ${props.theme.status.warningColorHover};
            outline: 3px solid ${props.theme.status.warningColorHover};
        }

        &:active{
            background-color: ${props.theme.status.warningColorActive};
        }
    `,
    primaryButtonWarning: (props) => `
    color: ${props.theme.textColorInverted};
  `,
    secondaryButtonWarning: (props) => `
    background: none;
    color: ${props.theme.status.warningColor};
    border: 2px solid ${props.theme.status.warningColor};
  `,

    tertiaryButtonWarning: (props) => `
    background: none;
    color: ${props.theme.textColorInverted};
`,

    error: (props) => `
    color: ${props.theme.status.errorColor};
    &:hover, &:focus {
    background-color: ${props.theme.status.errorColorHover};
    outline: 3px solid ${props.theme.status.errorColorHover};
    outline-offset: 2px;
    border: 2px solid transparent;
    }
    &:active {
    background-color: ${props.theme.status.errorColorActive};
    }
`,
    primaryButtonError: (props) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};
`,
    secondaryButtonError: (props) => `
    border: 2px solid ${props.theme.status.warningColor};
`,
    success: (props) => `
    background: none;
    color: ${props.theme.status.successColor};
    &:hover, &:focus {
    background-color: ${props.theme.status.successColorHover};
    outline: 3px solid ${props.theme.status.successColorHover};
    outline-offset: 2px;
    border: 2px solid transparent;
    }
    &:active {
    background-color: ${props.theme.status.successColorActive};
    }
`,
    primaryButtonSuccess: (props) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};
`,
    secondaryButtonSuccess: (props) => `
    border: 2px solid ${props.theme.status.warningColor};
`,
    tertiaryButtonSuccess: () => `
    background: none;
`
}



const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    transition: background-color 0.2s linear, color 0.2s linear;

    &:hover{
        background-color: ${props => props.theme.primaryHoverColor};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:focous{
        outline: 3px solid ${props => props.theme.primaryHoverColor};
        outline-offset: 2px;
    }

    &:active{
        backgroud-color: ${props => props.theme.primaryActiveColor};
        border-color: ${props => props.theme.primaryActiveColor};
        color: ${props => props.theme.textColorOnPrimary};
    }
`

export const PrimaryButton = styled(Button)`
    background-color: ${props => props.theme.primaryColor};
    border: none;
    color: white;

    &:disabled{
        background-color: ${props => props.theme.disabled};
        color: ${props => props.theme.textOnDisabled};
        cursor:  not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
    background: none;
    border: 2px solid ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryColor};

    &:disabled{
        background-color: none;
        color: ${props => props.theme.textOnDisabled};
        border-color: ${props => props.theme.disabled};
        cursor:  not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}

`;

export const TertiaryButton = styled(Button)`
    backgound: none;
    border: none;
    color: ${props => props.theme.primaryColor};

    
    &:disabled{
        background: none;
        color: ${props => props.theme.textOnDisabled};
        cursor:  not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}

`
