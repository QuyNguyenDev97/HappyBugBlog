"use client";

import ChangeImageGalery from "@/components/home/ChangImageGalery";
import ParticlesHeader from "@/components/home/ParticlesHeader";
import Header from "@/layouts/Header";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import styled from "./styled.module.scss";
import Image from "next/image";
import { Input } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
}

export default function Home() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      iceCreamType: {},
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Box component={"main"} className={styled["home-wrapper"]}>
      <Header />
      <Box className={styled["banner-section"]}>
        <Container>
          <Stack direction='row' height='100%' alignItems='center' justifyContent='space-between'>
            <Box>
              <Typography variant='h1' fontWeight={700}>
                Hi,
              </Typography>
              <Typography variant='h1' fontWeight={500}>
                I am Quý
              </Typography>
              <Typography variant='h1' fontWeight={500} className={styled["linear-wipe"]}>
                Web Developer
              </Typography>
              <Breadcrumbs aria-label='breadcrumb'>
                <Typography className={styled["breadcrumb-text-first"]}>Frontend Developer</Typography>
                <Typography className={styled["breadcrumb-text-seconds"]}>Blogger</Typography>
              </Breadcrumbs>
              <Stack direction='row' spacing={2} marginTop={2}>
                <Button
                  size='large'
                  color='secondary'
                  className={styled["contact-github"]}
                  variant='contained'
                  startIcon={<GitHubIcon />}
                >
                  Ping Me on Github
                </Button>
                <Button startIcon={<FacebookIcon />} size='large' variant='outlined'>
                  Ping me on Facebook
                </Button>
              </Stack>
            </Box>
            <ChangeImageGalery />
          </Stack>
        </Container>
        <Box className={styled["bg-section"]}></Box>
        <Box className={styled["section-cover"]}></Box>
      </Box>
      <Box className={styled["about-section"]}>
        <Container>
          <Grid container spacing={4}>
            <Grid item md={7}>
              <Box className={styled["about-content"]}>
                <Typography className={styled["about-content-title"]} variant='h3' fontWeight={700}>
                  Who i am ?
                </Typography>
                <Paper className={styled["about-content-paper"]} elevation={1}>
                  <Typography className={styled["about-content-desc"]} variant='h6' fontWeight={400} fontSize={16}>
                    Hello 👋👋👋, I am Nguyen Trong Quy, an enthusiastic{" "}
                    <Paper className={styled["about-content-desc-paper-primary"]} elevation={2}>
                      Web Developer
                    </Paper>{" "}
                    based in Ho Chi Minh City. With two years of hands-on experience and expertise in Javascript and
                    TypeScript 😖😖😖, I consider myself a creative individual with a relentless appetite for learning.
                    💪💪💪
                  </Typography>
                  <Typography className={styled["about-content-desc"]} variant='h6' fontWeight={400} fontSize={16}>
                    Beyond the lines of code is a dynamic individual, always ready to face challenges for continuous
                    growth. Innovation and passion drive me forward. 🔥🔥🔥
                  </Typography>
                  <Typography className={styled["about-content-desc"]} variant='h6' fontWeight={400} fontSize={16}>
                    I am currently seeking new opportunities to challenge myself and enhance both my programming and
                    teamwork skills in a diverse and innovative environment. I believe each project is a chance to learn
                    and contribute to something greater.
                  </Typography>
                  <Typography className={styled["about-content-desc"]} variant='h6' fontWeight={400} fontSize={16}>
                    Thank you for taking the time to learn about me. I look forward to the possibility of meeting and
                    sharing experiences with you in the future. Wishing you a great day ! 😊😊😊
                  </Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item md={5}>
              <Box className={styled["about-avatar"]}>
                <Image src='/avatar.jpg' objectFit='cover' priority fill sizes='100%' alt='avatar' />
              </Box>
            </Grid>
          </Grid>
          <Box className={styled["about-bg-cover"]}></Box>
          <Box className={styled["about-bg-cover-secondary"]}></Box>
        </Container>
      </Box>
      <Box className={styled["contact-section"]}>
        <Container>
          <Grid container spacing={4}>
            <Grid item md={7}>
              <FormControl>
                <InputLabel htmlFor='my-input'>Email address haha</InputLabel>
                <Input id='my-input' sx={{ color: "white" }} aria-describedby='my-helper-text' />
                <FormHelperText id='my-helper-text'>We will never share your email.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item md={5}></Grid>
          </Grid>
          <Box className={styled["about-bg-cover"]}></Box>
          <Box className={styled["about-bg-cover-secondary"]}></Box>
        </Container>
      </Box>
      <ParticlesHeader />
    </Box>
  );
}
