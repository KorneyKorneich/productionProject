import ProfileCard from './ui/ProfileCard/ProfileCard';

export type { ProfileType, ProfileSchema } from './model/types/types'

export { profileReducer, profileActions } from './model/slice/profileSlice'

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData'

export default ProfileCard
