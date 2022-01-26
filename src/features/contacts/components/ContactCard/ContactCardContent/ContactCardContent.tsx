import styled from "@emotion/styled";
import { CardContent, Divider, Typography } from "@mui/material";
import CardInfoItem from "./CardInfoItem/CardInfoItem";
import { PersonModel } from "features/contacts/types";

interface ContactCardContentProps {
  personInfo: PersonModel;
}

const ContactCardContent = ({ personInfo }: ContactCardContentProps) => {
  const { country, phone, jobArea, jobPosition, company, id } = personInfo;

  return (
    <CardContent>
      <MainInfo>
        <CardInfoItem label="Country">{country}</CardInfoItem>
        <CardInfoItem label="Phone">{phone}</CardInfoItem>
        <CardInfoItem label="ID">{id}</CardInfoItem>
      </MainInfo>
      <Divider />
      <JobInfo>
        <Typography variant="h5" sx={{ paddingTop: "14px" }}>
          Job
        </Typography>
        <CardInfoItem label="Area">{jobArea}</CardInfoItem>
        <CardInfoItem label="Position">{jobPosition}</CardInfoItem>
        <CardInfoItem label="Company name">{company}</CardInfoItem>
      </JobInfo>
      <Divider />
    </CardContent>
  );
};

export default ContactCardContent;

const MainInfo = styled.div`
  padding: 4px 4px;
  display: flex;
  flex-flow: row wrap;
  flex: 0 1 auto;
  justify-content: space-evenly;
  align-items: baseline;
`;

const JobInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 0px 0px 4px;
`;

