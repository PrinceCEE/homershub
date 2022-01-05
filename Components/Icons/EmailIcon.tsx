import { Icon } from "@chakra-ui/react";

const EmailIcon = ({ ...props }) => {
  return (
    <Icon viewBox="0 0 20 16" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
        fill="#D2DCE8"
      />
    </Icon>
  );
};

export default EmailIcon;
