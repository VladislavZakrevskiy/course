import {
    ProfileActions,
    ProfileCard,
    ProfileReducer,
    fetchProfileData,
    getProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
} from 'entities/Profile'
import React, { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

const initialReducers: ReducerList = {
    profile: ProfileReducer,
}

const ProfilePage = memo(() => {
    const { t } = useTranslation('main')
    const dispatch = useAppDispatch()
    const form = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const readonly = useSelector(getProfileReadonly)

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(
                ProfileActions.updateProfile({
                    first: value || '',
                })
            )
        },
        [dispatch]
    )

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(
                ProfileActions.updateProfile({
                    lastname: value || '',
                })
            )
        },
        [dispatch]
    )

    const onChangeAge = useCallback(
        (value?: string) => {
            const reg = /^\d+$/
            if (reg.test(value || '')) {
                dispatch(
                    ProfileActions.updateProfile({
                        age: Number(value) || 0,
                    })
                )
            }
        },
        [dispatch]
    )

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(
                ProfileActions.updateProfile({
                    city: value || '',
                })
            )
        },
        [dispatch]
    )

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(
                ProfileActions.updateProfile({
                    username: value || '',
                })
            )
        },
        [dispatch]
    )

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(
                ProfileActions.updateProfile({
                    avatar: value || '',
                })
            )
        },
        [dispatch]
    )

    const onChangeCurrency = useCallback(
        (value?: Currency) => {
            dispatch(
                ProfileActions.updateProfile({
                    currency: value || '',
                })
            )
        },
        [dispatch]
    )

    const onChangeCountry = useCallback(
        (value?: Country) => {
            dispatch(
                ProfileActions.updateProfile({
                    country: value || '',
                })
            )
        },
        [dispatch]
    )

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <ProfilePageHeader />
            <ProfileCard
                data={form}
                isLoading={isLoading}
                error={error}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
                readonly={readonly}
            />
        </DynamicModuleLoader>
    )
})

export default ProfilePage
