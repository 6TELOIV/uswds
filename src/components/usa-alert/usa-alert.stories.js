import Component from "./usa-alert.twig";
import {
  DefaultContent,
  EmergencyContent,
  ErrorContent,
  InfoContent,
  NoHeaderContent,
  NoIconContent,
  SlimContent,
  SuccessContent,
  WarningContent,
} from "./content";

export default {
  title: "Components/Alerts/Alert",
};

const Template = (args) => Component(args);

export const Default = Template.bind({});
Default.args = DefaultContent;

export const Emergency = Template.bind({});
Emergency.args = EmergencyContent;

export const Error = Template.bind({});
Error.args = ErrorContent;

export const Info = Template.bind({});
Info.args = InfoContent;

export const NoHeader = Template.bind({});
NoHeader.args = NoHeaderContent;

export const NoIcon = Template.bind({});
NoIcon.args = NoIconContent;

export const Slim = Template.bind({});
Slim.args = SlimContent;

export const Success = Template.bind({});
Success.args = SuccessContent;

export const Warning = Template.bind({});
Warning.args = WarningContent;
