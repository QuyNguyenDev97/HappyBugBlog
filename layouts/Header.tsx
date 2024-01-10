"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HiveIcon from "@mui/icons-material/Hive";
import { Box, Stack, styled } from "@mui/material";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const HeadetWrapper = styled(Container)`
  background-color: rgba(14, 18, 23, 0.32);
  -webkit-backdrop-filter: blur(80px);
  backdrop-filter: blur(80px);
  border-radius: 24px;
  position: fixed;
  left: 50%;
  top: 16px;
  transform: translate(-50%, 0);
  z-index: 999;
`;

function Header() {
  return (
    <HeadetWrapper>
      <Box component='header'>
        <Toolbar disableGutters>
          <Stack direction='row' width='100%' alignItems='center' justifyContent='space-between'>
            <Stack direction='row' alignItems='center' spacing={1}>
              <HiveIcon fontSize='large' />
              <Typography variant='h5' fontWeight={700} component='a' href='/'>
                Happy
                <Typography variant='h6' component='span' color={"GrayText"} fontWeight={500}>
                  Bug
                </Typography>
              </Typography>
            </Stack>
            <AccountCircleIcon fontSize='large' />
          </Stack>
        </Toolbar>
      </Box>
    </HeadetWrapper>
  );
}
export default Header;
