import React from 'react';
import { View, Picker, Alert } from 'react-native';
import styles from './styles';

export default class Estados extends React.Component{
	
	constructor(props){
		super(props);

		this.state = {
			estado : 'AC'
		}
	}

	changeEstado = (estado) => {
		this.setState({
			estado : estado
		});

		Alert.alert('Value : ' + estado); 
	}

	render(){
		return(
			<View style={styles.container}>
				<Picker style={styles.picker}
					selectedValue={this.state.estado}
					onValueChange={(estado) => this.changeEstado(estado)}>
					<Picker.Item label="Acre" value="AC" />
					<Picker.Item label="Alagoas" value="AL" />
					<Picker.Item label="Amapá" value="AP" />
					<Picker.Item label="Amazonas" value="AM" />
					<Picker.Item label="Bahia" value="BA" />
					<Picker.Item label="Ceará" value="CE" />
					<Picker.Item label="Distrito Federal" value="DF" />
					<Picker.Item label="Espírito Santo" value="ES" />
					<Picker.Item label="Goiás" value="GO" />
					<Picker.Item label="Maranhão" value="MA" />
					<Picker.Item label="Mato Grosso" value="MT" />
					<Picker.Item label="Mato Grosso do Sul" value="MS" />
					<Picker.Item label="Minas Gerais" value="MG" />
					<Picker.Item label="Pará" value="PA" />
					<Picker.Item label="Paraíba" value="PB" />
					<Picker.Item label="Paraná" value="PR" />
					<Picker.Item label="Pernambuco" value="PE" />
					<Picker.Item label="Piauí" value="PI" />
					<Picker.Item label="Rio de Janeiro" value="RJ" />
					<Picker.Item label="Rio Grande do Norte" value="RN" />
					<Picker.Item label="Rio Grande do Sul" value="RS" />
					<Picker.Item label="Rondônia" value="RO" />
					<Picker.Item label="Roraima" value="RR" />
					<Picker.Item label="Santa Catarina" value="SC" />
					<Picker.Item label="São Paulo" value="SP" />
					<Picker.Item label="Sergipe" value="SE" />
					<Picker.Item label="Tocantins" value="TO" />
				</Picker>
			</View>
		);
	}

}