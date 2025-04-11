import { State } from 'country-state-city'

export const formatNumber = (number: string | null, toFixed: number = 1) => {
    if (number) {
        const check = BigInt(number)
        const billion = BigInt(1_000_000_000)
        const million = BigInt(1_000_000)
        const thousand = BigInt(1_000)

        if (check >= billion) {
            return (Number(check / billion) + Number(check % billion) / 1_000_000_000).toFixed(toFixed).replace(/\.0$/, '') + 'B'
        }

        if (check >= million) {
            return (Number(check / million) + Number(check % million) / 1_000_000).toFixed(toFixed).replace(/\.0$/, '') + 'M'
        }

        if (check >= thousand) {
            return (Number(check / thousand) + Number(check % thousand) / 1_000).toFixed(toFixed).replace(/\.0$/, '') + 'K'
        }
        return check.toString()
    } else {
        return null
    }
}

export const formatNumberCurrency = (number: string, toFixed: number = 1) => {
    const check = BigInt(number)
    const crore = BigInt(1_00_00_000) // 1 Crore = 1,00,00,000
    const lakh = BigInt(1_00_000) // 1 Lakh = 1,00,000
    const thousand = BigInt(1_000) // 1 Thousand = 1,000

    if (check >= crore) {
        return (Number(check / crore) + Number(check % crore) / 1_00_00_000).toFixed(toFixed).replace(/\.0$/, '') + ' Cr'
    }

    if (check >= lakh) {
        return (Number(check / lakh) + Number(check % lakh) / 1_00_000).toFixed(toFixed).replace(/\.0$/, '') + ' L'
    }

    if (check >= thousand) {
        return (Number(check / thousand) + Number(check % thousand) / 1_000).toFixed(toFixed).replace(/\.0$/, '') + 'K'
    }

    return check.toString()
}

export const formatPhoneNumber = (phoneNumber: string) => {
    if (phoneNumber.length === 12) {
        const countryCode = `+${phoneNumber.slice(0, 2)}`
        const part1 = phoneNumber.slice(2, 7)
        const part2 = phoneNumber.slice(7)
        return `${countryCode}-${part1}-${part2}`
    }
    return phoneNumber // Return unformatted if it doesn't match the expected length
}

export const mapOptions = (optionsArray: string[]) => {
    return optionsArray.map((option: string) => ({
        label: option,
        value: option,
        key: option,
        desc: option
    }))
}

export const getStatusStyles = (status: string) => {
    switch (status) {
        case 'Paused':
            return 'bg-[#FCEDEB] text-[#E6533C]'
        case 'Draft':
            return 'bg-[#7d7d7d1a] text-[#AFAFAF]'
        case 'Completed':
            return 'bg-[#DBF0DC] text-[#4caf50]'
        case 'Published':
            return 'bg-[#3761ee1a] text-[#3761ee]'
        default:
            return 'bg-gray-200 text-gray-800'
    }
}

export const getStateName = (stateCode: string) => {
    const name = State.getStateByCodeAndCountry(stateCode, 'IN')

    return name?.name
}

// export const getCampaignCreatorStatus = (creator: ICampaignCreator) => {
//     switch (creator.state) {
//         case ECampaignCreatorState.ONBOARDING:
//             switch (creator.onboarding.status) {
//                 case EOnboardingStateStatus.REVIEW:
//                     return 'Under Review'
//                 case EOnboardingStateStatus.APPROVED:
//                     return EOnboardingStateStatus.APPROVED
//                 case EOnboardingStateStatus.REJECTED:
//                     return EOnboardingStateStatus.REJECTED
//                 default:
//                     return ''
//             }
//         case ECampaignCreatorState.PRICE:
//             switch (creator.price.status) {
//                 case EPriceStateStatus.AWAITING:
//                     return EPriceStateStatus.AWAITING
//                 case EPriceStateStatus.PENDING:
//                     return EPriceStateStatus.PENDING
//                 case EPriceStateStatus.UPDATED:
//                     return EPriceStateStatus.UPDATED
//                 default:
//                     return ''
//             }
//         case ECampaignCreatorState.SCRIPT:
//             switch (creator.script.status) {
//                 case EScriptStateStatus.AWAITING:
//                     return EScriptStateStatus.AWAITING
//                 case EScriptStateStatus.PENDING:
//                     return EScriptStateStatus.PENDING
//                 case EScriptStateStatus.UPDATED:
//                     return 'Under Review'
//                 case EScriptStateStatus.APPROVED:
//                     return EScriptStateStatus.APPROVED
//                 default:
//                     return ''
//             }
//         case ECampaignCreatorState.CONTENT:
//             switch (creator.content.status) {
//                 case EContentStateStatus.AWAITING:
//                     return EContentStateStatus.AWAITING
//                 case EContentStateStatus.LIVE:
//                     return EContentStateStatus.LIVE
//                 case EContentStateStatus.PENDING:
//                     return EContentStateStatus.PENDING
//                 case EContentStateStatus.PROCESSING:
//                     return EContentStateStatus.PROCESSING
//                 case EContentStateStatus.UNAVAILABLE:
//                     return EContentStateStatus.UNAVAILABLE
//                 default:
//                     return ''
//             }
//     }
// }
