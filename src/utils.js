export const customStyles = {
    container: provided => ({
        ...provided,
        width: 200
    }),
}

export const questionRange = [
    { label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '15', value: 15 },
    { label: '20', value: 20 },
];

export const numberRange = [
    { label: '10', value: 10 },
    { label: '11', value: 11 },
    { label: '12', value: 12 },
    { label: '14', value: 14 },
    { label: '15', value: 15 }
];

export const operator = [
    { label: 'Addition', value: '+' },
    { label: 'Substraction', value: '-' },
    { label: 'Multiplication', value: '*' },
    { label: 'Division', value: '/' }
]