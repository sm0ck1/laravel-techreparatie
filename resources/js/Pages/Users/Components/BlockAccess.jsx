import {Box} from "@mui/material";

const BlockAccess = ({access}) => {
  return (
      <Box>
          {access ? 'Yes' : 'No'}
      </Box>
  );
}

export default BlockAccess;
