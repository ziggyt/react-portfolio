import Terminal, {ColorMode, TerminalOutput} from 'react-terminal-ui';
import {useState} from "react";
import {TypeAnimation} from "react-type-animation";

interface Props {
    initialTerminalData: string
}

const TerminalController = ({initialTerminalData}: Props) => {
    const [terminalData, setTerminalData] = useState([
        <TerminalOutput>{initialTerminalData}</TerminalOutput>
    ]);
    // Terminal has 100% width by default so it should usually be wrapped in a container div
    return (
        <div className={'container p-2 rounded-lg shadow-2xl shadow-gray-400'}>
            <Terminal name='Max Fransson Personal Portfolio' colorMode={ColorMode.Dark}
                      onInput={terminalInput => console.log(`New terminal input received: '${terminalInput}'`)}>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'We produce food for Mice',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'We produce food for Hamsters',
                        1000,
                        'We produce food for Guinea Pigs',
                        1000,
                        'We produce food for Chinchillas',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </Terminal>
        </div>
    )

    function changeData(newData: string) {
        setTerminalData(newData);
    }

};

export default TerminalController;

