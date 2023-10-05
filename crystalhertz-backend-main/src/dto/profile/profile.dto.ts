import { ApiProperty } from '@nestjs/swagger';

export class ProfileDto {
  @ApiProperty({ example: 'myname', description: 'Profile username field' })
  username: string;

  /**
   * FIXME: Create albums interface
   */
  @ApiProperty({
    example: '["_id:album", "_id:album"]',
    description: 'Profile array albums field',
  })
  albums: null;

  /**
   * FIXME: Create playlists interface
   */
  @ApiProperty({
    example: '["_id:playlist", "_id:playlist"]',
    description: 'Profile array playlists field',
  })
  playlists: null;

  /**
   * FIXME: Create tracks interface
   */
  @ApiProperty()
  tracks: null;

  /**
   * FIXME: Create friends interface
   */
  @ApiProperty({
    example: '["_id:user", "_id:user"]',
    description: 'Profile array friends field',
  })
  friends: null;

  /**
   * FIXME: Create subscribe interface (PRO, DEFAULT, HAS)
   * Сейчас это временное решение
   */
  @ApiProperty({
    example: 'Profile has subscribe to platform',
    description: 'Profile subscribe field',
  })
  subscribe: 'PRO' | 'DEFAULT' | 'NONE';

  /**
   * Привязка профиля под один аккаунт спомощью _id из user
   */
  @ApiProperty({
    example: '_id:user',
    description: 'Profile ref _id from user account',
  })
  user: string;

  /**
   * Для переключения между профилями
   */
  @ApiProperty({
    description: 'Profile set isActive profiles',
  })
  isActive: boolean;

  constructor({
    username,
    albums,
    playlists,
    tracks,
    friends,
    subscribe,
    user,
    isActive,
  }: ProfileDto) {
    this.username = username;
    this.albums = albums;
    this.playlists = playlists;
    this.tracks = tracks;
    this.friends = friends;
    this.subscribe = subscribe;
    this.user = user;
    this.isActive = isActive;
  }
}
