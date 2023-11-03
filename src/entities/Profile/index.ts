import ProfileCard from './ui/ProfileCard/ProfileCard';

export type { ProfileType, ProfileSchema } from 'pages/ProfilePage/model/types/types'

export { profileReducer, profileActions } from 'pages/ProfilePage/model/slice/profileSlice'

export { fetchProfileData } from 'pages/ProfilePage/model/services/fetchProfileData/fetchProfileData'

export default ProfileCard
