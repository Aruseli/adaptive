import Chip from '@material-ui/core/Chip';
import React, { useCallback } from 'react';

export const FilterSelectedOptionChip = React.memo<any>(({
  id,
  title,
  handleDelete,
}:{
  id: string;
  title: string;
  handleDelete: (id: string) => any;
}) => {
  const onDelete = useCallback(() => handleDelete(id), []);
  return <Chip
      label={title}
      color="primary"
      onDelete={onDelete}
      style={{justifyContent: 'space-between'}}
    />
  }
)