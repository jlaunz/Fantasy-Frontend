import React from 'react'
import { MdAdd } from 'react-icons/md'
import { MdCheck } from 'react-icons/md'

const SearchResult = ({
    tracks,
    visible,
    setVisible,
    selectSearchItem,
    ...props
}) => {
    return (
        <div
            className={'search-results ' + (visible ? '' : 'hidden')}
            onClick={() => setVisible(false)}
        >
            {/* search result items */}
            {tracks.map((track, index) => {
                return (
                    <SearchResultItem
                        track={track}
                        index={index}
                        selectSearchItem={selectSearchItem}
                    ></SearchResultItem>
                )
            })}
        </div>
    )
}

const SearchResultItem = ({ track, selectSearchItem, index, ...props }) => {
    return (
        <div
            className={'result'}
            key={index}
            onClick={(event) => {
                selectSearchItem(track)
                event.stopPropagation()
            }}
        >
            <div className="img">
                <img src={track.albumArt} alt="" />
            </div>

            <div className={'info'}>
                <div className={'top'} title={track.trackName}>
                    {track.trackName}
                </div>
                <div className={'bottom'}>
                    <span className={'album-name'} title={track.albumName}>
                        {track.albumName}
                    </span>
                    <span className={'dot'}>.</span>
                    <span className={'artist-name'}>{track.artistName}</span>
                </div>
            </div>

            <div
                className={'addSong'}
                onClick={(event) => {
                    selectSearchItem(track)
                    event.stopPropagation()
                }}
            >
                {track.selected ? (
                    <MdCheck className={'icon'}> </MdCheck>
                ) : (
                    <MdAdd className={'icon'}></MdAdd>
                )}
            </div>
        </div>
    )
}

export default SearchResult
