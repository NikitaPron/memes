import { getFullURL } from "./music";


it('should return YouTubeId', () => {
    const url = getFullURL('https://www.youtube.com/watch?v=_j4k73zoy5Y');
    expect(url).toEqual('_j4k73zoy5Y')
});


it('should return YouTubeId', () => {
    const url = getFullURL('https://www.youtube.com/watch?v=WEZiBPipVr4&list=RDMMWEZiBPipVr4&start_radio=1');
    expect(url).toEqual('WEZiBPipVr4')
});