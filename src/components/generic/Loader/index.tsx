import { Dna } from 'react-loader-spinner';

function Loader({ style = 'w-1/2' }: {style?: string}) {
  return (
    <div className={`flex justify-center ${style}`}>
      <Dna
        visible
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperClass="h-full w-full"
      />
    </div>
  );
}

export default Loader;
