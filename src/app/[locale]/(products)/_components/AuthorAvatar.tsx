import { memo } from 'react';

import Avatar, { AvatarProps } from '@/components/ui/Avatar';

interface AuthorAvatarProps extends Omit<AvatarProps, 'avatar'> {
  username: string;
  imgUrl?: string;
}

const AuthorAvatar = memo<AuthorAvatarProps>(
  ({ username, imgUrl, size = 24 }) => {
    return <Avatar alt={username} avatar={imgUrl} size={size} />;
  },
);

AuthorAvatar.displayName = 'AuthorAvatar';

export default AuthorAvatar;
