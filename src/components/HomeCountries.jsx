import {ContentCountries, FilterForm} from './';
export const HomeCountries = ( {setUrl, data, isLoading} ) => {
    return (
        <>
            <FilterForm setUrl={setUrl} />
            <ContentCountries data={data} isLoading={isLoading} />
        </>
    )
}
